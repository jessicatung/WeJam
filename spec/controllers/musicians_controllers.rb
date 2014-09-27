require 'rails_helper'

describe MusiciansController, :type => :controller do
  let!(:musician) {FactoryGirl.create :musician}

  context "#new" do
    it "returns successful status" do
      get :new
      expect(response.status).to eq(200)
    end
    it "renders the sign up form" do
      get :new
      expect(response.body).to render_template(:new)
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
end
