'use strict';

function showComments(list) {
    const commentsContainer = document.querySelector('.comments');
    const fragment = list.reduce((commFragm, comment) => {
        commFragm.appendChild( createComment(comment) );
        return commFragm;
    }, document.createDocumentFragment());

    commentsContainer.appendChild(fragment);
    commentsContainer.style.whiteSpace = 'pre-line';
    commentsContainer.firstElementChild.style.whiteSpace = 'normal';
}

function createComment(comment) {
    const commentWrap = document.createElement('div'),
    photo = document.createElement('div'),
    avatar = document.createElement('div'),
    commentBlock = document.createElement('div'),
    commentText = document.createElement('p'),
    bottomComment = document.createElement('div'),
    commentDate = document.createElement('div'),
    commentActions = document.createElement('ul'),
    complain = document.createElement('li'),
    reply = document.createElement('li');

    commentWrap.classList.add('comment-wrap');
    photo.classList.add('photo');
    photo.setAttribute('title', comment.author.name);
    avatar.style = `background-image: url('${comment.author.pic.toString()}')`;
    commentBlock.classList.add('comment-block');
    commentText.classList.add('comment-text');
    commentText.textContent = comment.text;
    bottomComment.classList.add('bottom-comment');
    commentDate.classList.add('comment-date');
    commentDate.innerText = new Date(comment.date).toLocaleString('ru-Ru');
    commentActions.classList.add('comment-actions');
    complain.classList.add('complain');
    reply.classList.add('reply');

    commentWrap.appendChild(photo);
    commentWrap.appendChild(commentBlock);
    photo.appendChild(avatar);
    commentBlock.appendChild(commentText);
    commentBlock.appendChild(bottomComment);
    bottomComment.appendChild(commentDate);
    bottomComment.appendChild(commentActions);
    commentActions.appendChild(complain);
    commentActions.appendChild(reply);
    return commentWrap;
}

fetch('https://neto-api.herokuapp.com/comments')
    .then(res => res.json())
    .then(showComments);