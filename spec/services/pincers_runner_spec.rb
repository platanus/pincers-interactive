require 'rails_helper'

RSpec.describe PincersRunner do

  let(:runner) { PincersRunner.new :phantomjs }

  describe "execute_code" do

    it "should execute given code providing results submitted using submit" do
      expect { runner.execute_code "
        pincers.goto 'localhost:#{SERVER_PORT}/index.html'
        submit pincers.css('li').first.text
      " }.not_to raise_error

      expect(runner.result.content).to eq('GT')
    end

    it "should provide the exception object if code fails" do
      expect { runner.execute_code "whatevers" }.not_to raise_error
      expect(runner.exception).to be_a NameError
    end

  end

end
