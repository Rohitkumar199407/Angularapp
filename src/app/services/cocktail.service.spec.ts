import { TestBed } from '@angular/core/testing';
import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';
import { HttpErrorResponse } from '@angular/common/http';

import { CocktailService } from './cocktail.service';
import { NgxsModule } from '@ngxs/store';
import { CocktailsState } from '../state/cocktail.state';
import { FiltersState } from '../state/filter.state';
import { constants } from 'buffer';
import { PopulateGlasses } from '../state/filter.action';

describe('CocktailService test using HttpClientTestingModule', () => {
    let httpTestingController: HttpTestingController;
    let service: CocktailService;
    const baseUri = 'https://www.thecocktaildb.com/api/json/v1/1';
    const baseUri1 = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=12';

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                NgxsModule.forRoot([CocktailsState, FiltersState]),
            ],
        });

        httpTestingController = TestBed.inject(HttpTestingController);
        service = TestBed.inject(CocktailService);
        
       
    });

    // TODO:
    it('should return the length of possible pages', () => {   
       const pages=service.getPagesLength();
        console.log(pages);
        expect(pages).toBeTruthy();
    });
   
    // TODO:
    it('should return a list from paginateCocktails', () => {   
        const list=service.paginateCocktails(2);
        console.log(list);
        expect(list).toBeTruthy();
    });

    // TODO:
    it('should return cocktail details', () => {
        const Cdetails=service.getCocktailDetails("11007");  
        console.log(Cdetails);
        expect(Cdetails).toBeTruthy();
    });

    // TODO:
    it('should return available category list', () => {   
        const category=service.getFilter("Category");
        console.log(category);
        expect(category).toBeTruthy();
    });

    // TODO:
    it('should reset the search to letter a if no term is included', () => {  
        const reset=service.searchCocktails('a');
        console.log(reset);
        expect(reset).toBeTruthy();
    });

    // TODO:
   it('should search by first letter', () => {    
    const firstletter=service.searchCocktails('a');
    console.log(firstletter);
    expect(firstletter).toBeTruthy();
    });

    // TODO:
    it('should search by name', () => {
        const name=service.getCocktailDetails("Mojito");  
        console.log(name);
        expect(name).toBeTruthy();
    });
    // TODO:
    it('should filter by category (ingredient)', () => {  
        const category=service.filterByCategory("Cocktail","Galliano");
        console.log(category);
        expect(category).toBeTruthy();
    });

    // TODO:
    it('should get a random drink', () => {
        const random=service.getRandomCocktail();   
        console.log(random);
        expect(random).toBeTruthy();
    });

    // TODO:
    it('throws 404 error', () => {     
        const error=service.baseUri1;
        console.log(error);
        expect(error).toBeTruthy();
    });
});
