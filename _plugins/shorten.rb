# Made by yours truly, compiled and learned
# through various resources. So thanks to the following:
# - google.com 
# - stackoverflow.com
# - https://gist.github.com/
# - https://github.com/nas/url_shortener/
#
# Shortens permalinks using bit.ly API

require 'rubygems'
require 'url_shortener'

module Jekyll
    module ShortURLFilter

        def shorten(url)

        # Don't punish me for hardcoding, I'm still learning :)
        siteURL = "http://thoughts.annebarrios.me"
        longURL = siteURL + url

        # Hiding API token, not for public consumption...
        require_relative 'authenticate'

        shorten = client.shorten(longURL)   
        truncateURL = shorten.urls
        
        shortURL = truncateURL.gsub('http://', '').strip
        "#{ shortURL }"
        end
    end
end

Liquid::Template.register_filter(Jekyll::ShortURLFilter)