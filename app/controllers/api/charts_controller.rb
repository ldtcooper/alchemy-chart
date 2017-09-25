class Api::ChartsController < ApplicationController
  def index
    @charts = current_user.charts
    render :index
  end

  def show
    @chart = Chart.find(params[:id])
    render :show
  end

  def create
    @chart = Chart.new(chart_params)
    @chart.owner_id = current_user.id
    if @chart.save
      render json: ["Success"]
    else
      render json: @chart.errors.full_messages, status: 422
    end
  end

  def destroy
    @chart = Chart.find(params[:id])
    if @chart.delete
      render json: ["Success"]
    else
      render json: ["No such chart found"]
    end
  end

  private

  def chart_params
    params
      .require(:charts)
      .permit(
        :dataset_id,
        :name,
        :chart_type,
        :chart_sort,
        :x_axis, 
        :y_axis1,
        :y_axis2
      )
  end
end
