class Api::ChartsController < ApplicationController
  def index
    @charts = current_user.charts
    # need to add shared charts to this
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
    if @chart && @chart.owner_id == current_user.id
      @chart.delete
      render json: @chart.id
    else
      render json: ["No such chart found"], status: 404
    end
  end

  private

  def chart_params
    params
      .require(:chart)
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
