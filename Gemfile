# frozen_string_literal: true

source "https://rubygems.org"

# Use GitHub Pages dependency versions
gem "github-pages", group: :jekyll_plugins

# Your theme (Chirpy will work if included in _config.yml theme:)
gem "jekyll-theme-chirpy"

# Optional: for checking links/images in site
gem "html-proofer", "~> 5.0", group: :test

# Windows support gems
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.2.0", platforms: [:mingw, :x64_mingw, :mswin]
