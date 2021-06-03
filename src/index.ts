export default class ThemeHelper {

	private internalThemes: string[];
	private internalCurrentTheme: string;

	public constructor(themes: string[], startingTheme: string) {
		this.internalThemes = themes;
		this.internalCurrentTheme = startingTheme;
		this.updateDocumentStyleForCurrentTheme();
	}

	public currentTheme(): string {
		return this.internalCurrentTheme;
	}

	public setCurrentTheme(theme: string): void {
		this.internalCurrentTheme = theme;
		this.updateDocumentStyleForCurrentTheme();
	}

	public updateDocumentStyleForCurrentTheme(): void {
		this.internalThemes.forEach((aTheme: string) => {
			document.body.classList.remove(aTheme);
		});
		document.body.classList.add(this.internalCurrentTheme);
	}

}
