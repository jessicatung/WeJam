require 'rails_helper'

describe MusiciansController, :type => :controller do
  let!(:musician) {FactoryGirl.create :musician}

  context "#new" do
    # Creation of a new musician in musicians_controller#new is for sign-up functionality
    it "creates a new musician" do
      expect{
        get :create, musician: attributes_for(:musician)
        }.to change{Musician.count}.by(1)
    end
  end

  context "#create" do 
    it "should create a new musician" do 
      expect{
        post :create, musician: attributes_for(:musician)
        }.to change{Musician.count}.by(1)
    end
    it "returns successful status" do
      post :create, :musician => attributes_for(:musician)
      expect(response.status).to eq(302)
    end
    it "doesnt create a user with invalid params" do
      expect {
        post :create, musician: {username: nil, password: nil}
        }.to_not change { Musician.count }
    end
    it "should redirect to the main index page" do 
      expect {
        post :create, musician: attributes_for(:musician)
        should redirect_to musicians_path
      }
    end
  end

  context "#show" do
    it "loads page successfully" do
      get :show, id: musician.id
      expect(response).to be_success
    end
    it "renders the show template" do
      get :show, id: musician.id
      expect(response.body).to render_template(:partial => "_show")
    end
    it "assigns musician to @musician" do
      get :show, id: musician.id
      expect(assigns(:musician)).to eq musician
    end
  end

  context "#edit" do
    it "assigns the requested musician to @musician" do
      get :edit, id: musician.id
      expect(assigns(:musician)).to eq musician
    end
    it "renders edit view successfully" do
      get :edit, {id: musician.id, musician: attributes_for(:musician)}
      expect(response).to be_success
    end
  end

  context "#update" do
    before :each do
      @updated_musician = create(:musician, username: "bob", email: "bob@bob.com", location: "your mom", instrument: "alto sax", skill_level: "beginner")
    end
    it "locates the requested @musician" do
      patch :update, id: @updated_musician, musician: attributes_for(:musician)
      expect(assigns(:musician)).to eq(@updated_musician)
    end
    it "changes musician's attributes if valid params" do
      patch :update, id: @updated_musician, musician: attributes_for(:musician, username: "bobby", email: "bob@bob.com", location: "your mom", instrument: "alto sax", skill_level: "beginner")
      @updated_musician.reload
      expect(@updated_musician.username).to eq("bobby")
      expect(@updated_musician.email).to eq("bob@bob.com")
    end
    it "doesn't change musician's attributes if invalid params" do
      patch :update, id: @updated_musician, musician: attributes_for(:musician, username: "bobby", email: nil, location: "your mom", instrument: "alto sax", skill_level: "beginner")
      @updated_musician.reload
      expect(@updated_musician.username).to_not eq("bobby")
      expect(@updated_musician.email).to eq("bob@bob.com")
    end
  end

end
