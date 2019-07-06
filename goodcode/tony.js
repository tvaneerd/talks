function tony_select(value) {
 $("section:not(.stack).current .tony-option.current").removeClass("current");
 $("section:not(.stack).current .tony-option.tony-"+value).addClass("current");
}
