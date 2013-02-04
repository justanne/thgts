require 'date'
require 'facets/integer/ordinal'

module Jekyll
  module DateFilter
    def prettyday(date)
      # "#{date.strftime('%e').to_i.ordinalize} #{date.strftime('%B')} #{date.strftime('%Y')}"
      "#{date.strftime('%d').to_i.ordinalize}"
    end  
  end
end

Liquid::Template.register_filter(Jekyll::DateFilter)