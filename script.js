var $btnIcon = $('#btn i')

$('#btn').on('click',function(){

    $('body').toggleClass('open')

    console.log( $('body').hasClass('open') )
    //bodyにopenというクラス持ってますか持ってませんか　true falseで返ってくる

    if( $('body').hasClass('open') ){
        $btnIcon
        .removeClass('ri-menu-line')
        .addClass('ri-close-line') }
        else { 
        $btnIcon
        .removeClass('ri-close-line')
        .addClass('ri-menu-line') 
        }
    
})