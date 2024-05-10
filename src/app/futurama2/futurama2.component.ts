import { CommonModule, NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-futurama2',
  standalone: true,
  imports: [CommonModule, HttpClientModule, NgFor],
  templateUrl: './futurama2.component.html',
  styleUrl: './futurama2.component.css'
})
export class Futurama2Component implements OnInit {

  httpClient = inject(HttpClient);

  private readonly scrollThreshold = 0;
  displayLimit = 10;
  scrollReachedBottom: boolean = false;
  isFilterApplied: boolean = false;

  infos: any = [];
  characters: any[] = [];
  casts: any[] = [];
  pickedCharacter: any;
  filteredCharacters: any[] = [];
  searchText: string = '';
  selectedSpecies: string = '';
  selectedGender: string = '';
  shuffledSayings: string[] = [];

  ngOnInit(): void {
    // this.fetchInfos();
    this.fetchCharacters();
    // this.fetchCasts();
    this.shuffleSayings();
  }

  fetchInfos() {
    this.httpClient.get('https://api.sampleapis.com/futurama/info')
      .subscribe((infos: any) => {
        console.log("INFOS: ", infos);
        this.infos = infos;
      });
  }

  fetchCharacters() {
    this.httpClient.get('https://api.sampleapis.com/futurama/characters')
      .subscribe((characters: any) => {
        console.log("CHARACTERS: ", characters);
        this.characters = characters;
        this.filteredCharacters = characters;
      });
  }

  fetchCasts() {
    this.httpClient.get('https://api.sampleapis.com/futurama/cast')
      .subscribe((casts: any) => {
        console.log("CAST: ", casts);
        this.casts = casts;
      });
  }

  handleClick(character: any) {
    console.log(`Clicked on ${character.name.first} ${character.name.last}`);
    this.pickedCharacter = character;
    this.shuffleSayings();
  }

  filterCharacters(searchText: string) {
    if (!searchText || searchText.trim() === '') {
      this.filteredCharacters = this.characters; // If search text is empty, use all characters
      return;
    }
    searchText = searchText.toLowerCase();
    this.filteredCharacters = this.characters.filter(character =>
      (character.name.first.toLowerCase() + ' ' + character.name.last.toLowerCase()).includes(searchText)
    );
  }

  updateFilteredCharacters() {
    this.filteredCharacters = this.characters.filter(character => {
      const speciesMatch = !this.selectedSpecies || character.species === this.selectedSpecies;
      const genderMatch = !this.selectedGender || character.gender === this.selectedGender;
      const nameMatch = !this.searchText ||
        (character.name.first.toLowerCase() + ' ' + character.name.last.toLowerCase()).includes(this.searchText.toLowerCase());
      return speciesMatch && genderMatch && nameMatch;
    });
  }

  getUniqueSpecies(): string[] {
    return [...new Set(this.characters.map(character => character.species))];
  }

  getUniqueGenders(): string[] {
    return [...new Set(this.characters.map(character => character.gender))];
  }

  filterBySpecies(species: string) {
    this.filteredCharacters = this.characters.filter(character =>
      species ? character.species === species : true
    );
  }

  filterByGender(gender: string) {

    this.filteredCharacters = this.characters.filter(character =>
      gender ? character.gender === gender : true
    );
  }

  onSpeciesFilterChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedSpecies = target.value;
    this.updateFilteredCharacters();
    this.isFilterApplied = true;
  }

  onGenderFilterChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedGender = target.value;
    this.updateFilteredCharacters();
    this.isFilterApplied = true;
  }

  onSearchInputChange(searchText: string) {
    this.searchText = searchText;
    this.updateFilteredCharacters();
    this.isFilterApplied = true;
  }

  resetFilters() {
    this.selectedSpecies = '';
    this.selectedGender = '';
    this.searchText = '';
    this.updateFilteredCharacters();
    this.isFilterApplied = false;
  }

  shuffleSayings() {
    // Shuffle the sayings array
    this.shuffledSayings = this.shuffleArray(this.pickedCharacter.sayings);
  }

  private shuffleArray(array: any[]): any[] {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  onScroll(event: any) {
    const scrollTop = event.target.scrollTop;
    const scrollHeight = event.target.scrollHeight;
    const offsetHeight = event.target.offsetHeight;
    const x = scrollHeight - scrollTop - offsetHeight;
    const y = this.scrollThreshold;
    // console.log("x = ", x);
    // console.log("y = ", y);
    if (scrollHeight - scrollTop - offsetHeight < this.scrollThreshold) {
      this.scrollReachedBottom = true;
      console.log("scrollReachedBottom: ", this.scrollReachedBottom);
      console.log("Scroll reaches bottom");
      this.loadMoreData();
    } 
  }

  loadMoreData() {
    console.log("Load more data");
    this.displayLimit += 10;
  }

}
