### go to first line

- <kbd>gg</kbd>
- <kbd>:1</kbd>

## [Why, oh WHY, do those #?@! nutheads use vi?](http://www.viemu.com/a-why-vi-vim.html)
### manipulating delimited blocks

- i: inner
- a: include the delimiting characters
- diw, diW, di), di", di}, di], dip
- w: punctuation delimited word
- W: current space delimited word

### moving around

- h, j, k, l
- f + a character
- % for matching parens
- H, M, L (to screen top, middle, and bottom)
- / for seaching a string
- ]]
- zt, zz, zb (put the current line on top, middle, and bottom)
- */# (search the current word forward/backword)

### multiline indent

- <i} (place the cursor inside a block first)