let posts = document.querySelectorAll('.post');

let titles = [];
let authors = [];

for(let i = 0; i < posts.length; i++){
    let post = posts[i];
    let title = post.querySelector('.title');
    let author = post.querySelector('.author');
    let titleContents = title.textContent;
    let authorContents = author.textContent;
    titles.push(titleContents);
    authors.push(authorContents);
}

document.write(titles + '<br>' + '<br>');
document.write(authors);