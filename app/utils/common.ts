export const replaceSpecialCharacters = (str:string) => {
	return str.replace(/[^\w\s]/gi, ' ');
}

export const capitalize = (str:string) => {
	return str.toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export const formatRepoName = (str:string) => {
	str = replaceSpecialCharacters(str);
	str = capitalize(str);
	return str;
}