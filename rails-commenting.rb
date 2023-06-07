# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) This line is defining a class called BlogPostsController that inherits all qualities of  ApplicationController
class BlogPostsController < ApplicationController
  def index
    # ---2) This is an instance variable assigning all blog posts to the variable @posts to display
    @posts = BlogPost.all
  end

  # ---3) This is defining a method called show, which will display or read whatever it's assigned to display
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) This method will create a new object, like a blog post.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) this line is assigning @post to create a new blog post with a :title and :content
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6) This line will display whatever blog post ID is inputted
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) This line will update blog_post_params of the given blog
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8) This line will redirect to, or display blog_posts_path
      redirect_to blog_posts_path
    end
  end

  # ---9) Anything under this line will not be displayed to users
  private
  def blog_post_params
    # ---10) this line is defining blog_post to require the params :title and :content
    params.require(:blog_post).permit(:title, :content)
  end
end
