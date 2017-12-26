import { Component } from '@angular/core'

@Component({
    selector: 'header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    menuVisible: boolean;

    toggleMenu(menuVisible?: boolean) {
        const toggleValue = typeof(menuVisible) === 'boolean'?
            menuVisible :
            !this.menuVisible;
        this.menuVisible = toggleValue;
    }
}