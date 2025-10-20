# Use modern Ruby 3.3 Alpine for small size
FROM ruby:3.3-alpine

# Install build tools & dependencies for native gems
RUN apk add --no-cache build-base libxml2-dev libxslt-dev nodejs npm git

# Set working directory
WORKDIR /srv/jekyll

# Copy Gemfiles first (caching dependencies)
COPY Gemfile Gemfile.lock ./

# Install Bundler & gems
RUN gem install bundler
RUN bundle install

# Copy the rest of your site
COPY . .

# Expose Jekyll port
EXPOSE 4000

# Default command
CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--port", "4000", "--livereload", "--drafts", "--verbose", "--force_polling"]

