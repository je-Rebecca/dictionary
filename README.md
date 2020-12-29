# Make the word memorize list 

Using Html, css, JavaScript 
This site add with time, Famous saying api. 
The main function is you can set your goal of today and add the word and meanings that you want to memorize with ':'

Without ':' it poped up the alert
### first page
![za](https://user-images.githubusercontent.com/67889991/103273380-2e3e8e00-498d-11eb-9347-1eb44908b862.JPG)

### After Type 
![qszs](https://user-images.githubusercontent.com/67889991/103273669-dbb1a180-498d-11eb-98f9-608d9fa8fba9.png)
### Hover edge of word, delete icron poped up 
![ho](https://user-images.githubusercontent.com/67889991/103273673-dd7b6500-498d-11eb-82dd-5b20559f79a8.JPG)
### without :  it will alert 
```
function handleSubmit(text) {
  const currentVal = wordinput.value;
  let data = [];
  data = currentVal.split(':');
  let eng = data[0];
  let kor = data[1];
  printValue(eng, kor);
  clear();
}
```
using 'split' tag for distingushed with meaing and words (this function toatlly for the english not chinese word cause chinese need 3 array) 
![alert](https://user-images.githubusercontent.com/67889991/103273675-dd7b6500-498d-11eb-988d-fb918b776709.JPG)
### checkbox, line through over word and grayish 
![memoriz](https://user-images.githubusercontent.com/67889991/103273676-de13fb80-498d-11eb-838b-02e476e2043d.JPG)

