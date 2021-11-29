import { makeAutoObservable } from "mobx"

export default class DeviceStore {
   constructor() {
      this._brands = []
      this._types = []
      this._devices = []
      this._page = 1
      this._totalCount = 0
      this._limit = 9
      this._selectedType = {}
      this._selectedBrand = {}
      this._search = ''
      makeAutoObservable(this)
   }
   setSearch(search) {
      this._search = search;
   }
   setCategories(types) {
      this._types = types;
   }
   setTotalCount(count) {
      this._totalCount = count;
   }
   setPage(page) {
      this._page = page;
   }
   setBrands(brands) {
      this._brands = brands;
   }
   setProducts(devices) {
      this._devices = devices;
   }
   setSelectedType(type) {
      this._selectedType = type
   }
   setSelectedBrand(Brand) {
      this._selectedBrand = Brand
   }

   get search() {
      return this._search
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
   get page() {
      return this._page
   }
   get limit() {
      return this._limit
   }
   get totalCount() {
      return this._totalCount
   }
}
