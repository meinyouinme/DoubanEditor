// 获取光标位置
export function getCursorPosition (textDom) {
  let cursorPos = 0
  if (document.selection) {
    // IE Support
    textDom.focus()
    var selectRange = document.selection.createRange()
    selectRange.moveStart('character', -textDom.value.length)
    cursorPos = selectRange.text.length
  } else if (textDom.selectionStart || textDom.selectionStart == '0') {
    // Firefox support
    cursorPos = textDom.selectionStart
  }
  return cursorPos
}
