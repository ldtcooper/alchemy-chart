class Api::DatasetsController < ApplicationController
  def index
    @datasets = Dataset.find_by(current_user.id)
    render :index
  end

  def create
    @dataset = Dataset.new(dataset_params)
    @dataset.owner_id = current_user.id
    if @dataset.save
      redirect_to :index
    else
      render json: @dataset.errors.full_messages, status: 422
    end
  end

  def destroy
    @dataset = Dataset.find(params[:id])
    if @dataset
      @dataset.delete
      redirect_to :index
    else
      render json: ["No such dataset found"], status: 404
    end
  end

  private

  def dataset_params
    params.require(:dataset).permit(:dataset_name, :data_type, :data_text)
  end
end
