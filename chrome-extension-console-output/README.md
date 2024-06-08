# Chrome extension

## installation of the builder
```sh
# ruby
sudo apt-get install ruby-dev rubygems
sudo gem install crxmake

# python 
sudo apt-get install swig python3-pip
sudo pip3 install crxmake
```


## build
```sh
rm *.crx
rm *.pem 
crxmake --pack-extension=.
ls -la
```

## chrome installation 
```sh
google-chrome chrome://extensions/
```

```sh
# Developer mode 
# Click "Load unpacked" and select your extension directory.
pwd | clipboard

# or "update"
```