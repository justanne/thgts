require 'date'
require 'facets/integer/ordinal'

module Jekyll
  module DateFilter
    def prettyday(date)     
      "#{date.strftime('%d').to_i.ordinalize}"
    end  
  end
end

Liquid::Template.register_filter(Jekyll::DateFilter)