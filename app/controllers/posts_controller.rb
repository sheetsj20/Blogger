class PostsController < ApplicationController
	before_action :set_post, only: [:show, :edit, :update, :destroy]
	def index
		@posts = Post.all
		render json: @posts
	end
	def create
    @posts = Post.new(posts_params)

    respond_to do |format|
      if @posts.save
        format.html { redirect_to @posts, notice: 'User was successfully created.' }
        format.json { render :show, status: :created, location: @posts }
      else
        format.html { render :new }
        format.json { render json: @posts.errors, status: :unprocessable_entity }
      end
    end
  end
end
