//$('selector).action

$('.a').click(function () {
    $('h1').hide(2000)
})
$('.b').click(function () {
    $('h1').show(2000)
})
$('.c').click(function () {
    $('h1').toggle(2000)
})

$('.d').click(function () {
    $('h1').fadeIn(4000)
})
$('.e').click(function () {
    $('h1').fadeOut(4000)
})
$('.f').click(function () {
    $('h1').fadeToggle(4000)
})
$('.g').click(function () {
    $('h1').slideUp()
})
$('.h').click(function () {
    $('h1').slideDown()
})
$('.i').click(function () {
    $('h1').slideToggle()
})
$('.j').click(function () {
    $('h1').addClass('new')
})
$('.k').click(function () {
    $('h1').removeClass('new')
})
$('.l').click(function () {
    $('h1').toggleClass('new')
})
$('.m').click(function () {
    $('h1').css({ color: 'yellow', fontSize: '50px' })
})
$('.n').click(function () {
    $('h1').animate({ left: '500px' }, 4000)
})
$('.o').click(function () {
    $('h1').stop()
})
$('.p').click(function () {
    $('h1').prepend('<input>')
})

$('.q').click(function () {
    $('h1').append('<input>')
})

$('.r').click(function () {
    $('h1').before('<input>')
})

$('.s').click(function () {
    $('h1').after('<input>')
})

$('.t').click(function () {
    $('h1').remove()
})

$('.u').click(function () {
    $('h1').empty()
})