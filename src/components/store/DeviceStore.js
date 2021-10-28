import { makeAutoObservable } from "mobx"

export default class DeviceStore {
   constructor() {
      this._brands = [
         { id: 1, name: 'Apple', quantity: 220 },
         { id: 2, name: 'Samsung', quantity: 120 },
         { id: 3, name: 'Lg', quantity: 320 },
         { id: 4, name: 'Asus', quantity: 32 },
         { id: 5, name: 'Sony', quantity: 520 },
         { id: 6, name: 'Dyne', quantity: 55 },
         { id: 7, name: 'Canon', quantity: 98 },
         { id: 8, name: 'Metra', quantity: 120 },
         { id: 9, name: 'Insigna', quantity: 576 }
      ]
      this._types = [
         { id: 1, name: 'Cell Phones', quantity: 1920 },
         { id: 2, name: 'Computers & Tablets', quantity: 1820 },
         { id: 3, name: 'Cell Phone Accessories', quantity: 460 },
         { id: 4, name: 'Accessories', quantity: 6556 },
         { id: 5, name: 'Audio', quantity: 120 },
         { id: 6, name: 'iPhone Accessories', quantity: 353 },
         { id: 7, name: 'Cameras & Camcorders', quantity: 45 },
         { id: 8, name: 'iPhone Cases & Clips', quantity: 456 },
         { id: 9, name: 'Small Kitchen Appliances', quantity: 55 }
      ]
      this._devices = [
         {
            "id": "76w0hz7015kkr9kjkav",
            "images": "https://content2.rozetka.com.ua/goods/images/big_tile/163399632.jpg",
            "title": "Ноутбук Acer Aspire 3 ",
            "rating": 2.89,
            "price": 15999,
            "category": "laptops",
            "brand": "acer"
         },
         {
            "id": "qeagrlm9lrkr9kjkav",
            "images": "https://content1.rozetka.com.ua/goods/images/big_tile/178060622.jpg",
            "title": "Ноутбук Acer Aspire 7 ",
            "rating": 1.96,
            "price": 21500,
            "category": "laptops",
            "brand": "acer"
         },
         {
            "id": "4g0lv7ii7ytkr9kjkav",
            "images":
               "https://content.rozetka.com.ua/goods/images/big_tile/30872664.jpg",

            "title": "Ноутбук Apple MacBook 13",
            "rating": 1.57,
            "price": 33999,
            "category": "laptops",
            "brand": "apple"
         }

      ]
      this._selectedType = {}
      this._selectedBrand = {}
      makeAutoObservable(this)
   }
   setTypes(types) {
      this._types = types;
   }
   setBrands(brands) {
      this._brands = brands;
   }
   setDevices(devices) {
      this._devices = devices;
   }
   setSelectedType(type) {
      this._selectedType = type
   }
   setSelectedBrand(Brand) {
      this._selectedBrand = Brand
   }

   get types() {
      return this._types
   }
   get brands() {
      return this._brands
   }
   get devices() {
      return this._devices
   }
   get selectedType() {
      return this._selectedType
   }
   get selectedBrand() {
      return this._selectedBrand
   }
}
