class Api::V1::SessionsController < Api::V1::BaseController

  def create
    runner = PincersRunner.new params.fetch(:broser, :phantomjs)
    runner.execute_code params[:code]

    render json: runner_as_json(runner)
  end

private

  def runner_as_json(_runner)
    if _runner.exception
      {
        result: :error,
        content: {
          name: _runner.exception.to_s,
          message: _runner.exception.message,
          trace: _runner.exception.backtrace,
        }
      }
    elsif _runner.result
      {
        result: _runner.result.type,
        content: _runner.result.content
      }
    else
      {
        result: :empty,
        content: ''
      }
    end
  end

end
