class ErrorsController < ApplicationController
  def log
    begin
      1 / 0
    rescue ZeroDivisionError => e
      ElasticAPM.report e
    end

    render plain: 'error', status: 500
  end

  def message
    ElasticAPM.report_message "This is a message"
    render plain: 'error', status: 500
  end

  def throw_error
    1 / 0
  end
end
