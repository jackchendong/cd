set nu
set noswapfile


set hlsearch "表示高亮搜索单词
set incsearch "表示边输入便匹配

set ignorecase "大小写忽略
set smartcase
let mapleader=" "

nnoremap <leader><leader> :noh<enter>
set nowrap "设置不自动折行
set title
set wildmenu "自身命令模式下补全

set laststatus=2
set tabstop=4
set shiftwidth=4 "自动缩进插入的空格数
set softtabstop=4 "使用或自动插入或删除相应的空格数


nnoremap <leader>w :w<enter>
nnoremap <leader>q :q<enter>
nnoremap a A


set nocompatible "打开不兼容模式
syntax on
filetype indent on "根据文件类型进行自动缩进
filetype on "开启文件类型侦测 filetype plugin on "根据侦测到的不同类型加载对应的插件
"runtime bundle/vim-pathogen/autoload/pathogen.vim
"execute pathogen#infect()


