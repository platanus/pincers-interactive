require 'pincers'

class PincersRunner

  class ResultSubmitted < Exception

    attr_reader :type, :content

    def initialize(_type, _content)
      @type = _type
      @content = _content
    end

  end

  class DSL

    attr_reader :pincers

    def initialize(_pincers)
      @pincers = _pincers
    end

    def submit(_result)
      if _result.respond_to? :to_html
        raise PincersRunner::ResultSubmitted.new :html, _result.to_html
      else
        raise PincersRunner::ResultSubmitted.new :json, _result.as_json
      end
    end

  end

  attr_reader :result, :exception

  def initialize(_driver=nil, _options={})
    @driver = _driver
    @options = _options
    @exception = nil
  end

  def execute_code(_code)
    begin
      Pincers.for_webdriver(@driver, @options) do |pincers|
        dsl = DSL.new pincers
        dsl.instance_eval _code
      end
    rescue ResultSubmitted => result
      @result = result
    rescue Exception => exc
      @exception = exc
    end
  end

end
