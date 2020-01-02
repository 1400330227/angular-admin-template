import {Directive, Inject, Input} from '@angular/core';
import {AccordionDirective} from './accordion.directive';

@Directive({
    selector: '[appAccordionlink]'
})
export class AccordionlinkDirective {
    protected OPEN = false;
    @Input() public group: any;
    open: boolean;

    private nav: AccordionDirective;

    constructor(@Inject(AccordionDirective) nav: AccordionDirective) {
        this.nav = nav;
    }

}
