import {Directive} from '@angular/core';
import {AccordionlinkDirective} from './accordionlink.directive';
import {Router} from '@angular/router';

@Directive({
    selector: '[appAccordion]'
})
export class AccordionDirective {

    private navLinks: Array<AccordionlinkDirective> = [];

    constructor(private router: Router) {
        setTimeout(() => this.checkOpenLinks());
    }

    addLink(link: AccordionlinkDirective) {
        this.navLinks.push(link);
    }

    removeGroup(link: AccordionlinkDirective) {
        const index = this.navLinks.findIndex((navLink: AccordionlinkDirective) => link === navLink);
        if (index !== -1) {
            this.navLinks.splice(index, 1);
        }
    }

    checkOpenLinks() {
        this.navLinks.forEach((link: AccordionlinkDirective) => {
            if (link.group) {
                const url = this.router.url;
                const currentUrl = url.split('/');
                if (currentUrl.includes(link.group)) {
                    link.open = true;
                    this.closeOtherLinks(link);
                }
            }
        });

    }

    private closeOtherLinks(link: AccordionlinkDirective) {
        this.navLinks.forEach((navLink: AccordionlinkDirective) => {
            if (link !== navLink) {
                navLink.open = false;
            }
        });
    }
}
