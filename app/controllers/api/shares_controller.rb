class Api::SharesController < ApplicationController
  def create
    @share = Share.new(share_params)
    if @share.save
      render json: ["Success"]
    else
      render json: @share.errors.full_messages, status: 422
    end
  end

  private

  def share_params
    params.require(:share).permit(:sharee_id, :chart_id)
  end
end
