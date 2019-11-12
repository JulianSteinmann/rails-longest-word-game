class GamesController < ApplicationController
  def new
    @letters = []
    alphabet = ('A'..'Z').to_a
    10.times do
      @letters << alphabet.sample
    end
  end

  def score
    @word = params['word']
  end
end
