figma.showUI(__html__,{width: 320, height: 320});

async function main() {
  await figma.loadFontAsync({ family: "Roboto", style: "Regular" });
  await figma.loadFontAsync({ family: "Roboto", style: "Bold" });
}

main().then(() => {

  figma.ui.onmessage = msg => {

    if (msg.type === 'create-template') {
  
      let pageTitle = msg.titletext
      let projectURL = msg.urlText
      let bgColor = msg.colorValue
      let frame = figma.createFrame()
      let page = figma.createPage()
      let text = figma.createText()
      let label = figma.createText()
      let url = figma.createText()
      let pageDisplay = figma.createPage()
      let pageMockups = figma.createPage()
      let pageWireframes = figma.createPage()
      let pageFlows = figma.createPage()
      let pageBreak = figma.createPage()
   
      page.appendChild(frame)
      frame.appendChild(text)
      frame.appendChild(label)
      frame.appendChild(url)
      frame.resize(620,320)

      page.name = pageTitle
      label.name = "Label"
      frame.name = "Thumb"
      text.name = "Title"
      url.name = "Project URL"
      pageDisplay.name = "⚡️Final"
      pageMockups.name = "🖌Mockups"
      pageWireframes.name = "🖍Wireframes"
      pageFlows.name = "✏️Flows"
      pageBreak.name = "—————————"

      text.x = 0
      text.y = 20
      text.fontSize = 46
      text.textAlignVertical = "CENTER"
      text.textAutoResize = "NONE"
      text.resize(620,320)
      text.fontName = { family: "Roboto", style: "Bold" }
      text.fills = [{type: 'SOLID', color: {r: 255 / 255, g: 255 / 255, b: 255 / 255}}]

      label.y = 0
      label.x = 0
      label.fontSize = 32
      label.textAlignHorizontal ="LEFT"
      label.textAutoResize = "WIDTH_AND_HEIGHT"
      label.textAlignVertical = "TOP"
      label.fontName = { family: "Roboto", style: "Regular" }
      label.fills = [{type: 'SOLID', color: {r: 255 / 255, g: 255 / 255, b: 255 / 255}}]

      url.y = 187
      url.x = 0
      url.fontSize = 22
      url.textAlignHorizontal ="LEFT"
      url.textAutoResize = "WIDTH_AND_HEIGHT"
      url.textAlignVertical = "TOP"
      url.fontName = { family: "Roboto", style: "Regular" }
      url.fills = [{type: 'SOLID', color: {r: 255 / 255, g: 255 / 255, b: 255 / 255}}]
      url.opacity = 0.5

      async function picker(hex1,hex2,hex3,newLabel) {
        page.backgrounds = [{type: 'SOLID', color: {r: hex1 / 255, g: hex2 / 255, b: hex3 / 255}}]
        frame.backgrounds = [{type: 'SOLID', visible: false, color: {r: hex1 / 255, g: hex2 / 255, b: hex3 / 255}}]
        text.characters = pageTitle
        label.characters = newLabel
        url.characters = projectURL
      }

      if (bgColor === "1") {
        picker(0,122,229,"Work in Progress")
      }
  
      if (bgColor === "2") {
        picker(0,173,159,"Ready to Review")
      }
  
      if (bgColor === "3") {
        picker(155,0,245,"Live")
      }

      figma.currentPage = page
      figma.viewport.zoom = 1
      figma.root.insertChild(0, page);
      figma.root.insertChild(1, pageDisplay);
      figma.root.insertChild(2, pageMockups);
      figma.root.insertChild(3, pageWireframes);
      figma.root.insertChild(4, pageFlows);
      figma.root.insertChild(5, pageBreak);
    }

    if (msg.type === 'update-template') {

      let oldTitle = ""
      let oldURL = ""
      let currentPage = figma.root.children[0]

      if (currentPage.name.length > 0) {
        oldTitle = currentPage.name

        currentPage.children.forEach(child => {

          if (child.type === "FRAME") {
            child.children.forEach(newChild => {
              if (newChild.type === "TEXT" && newChild.name === "Project URL") {
                oldURL = newChild.characters
              }
            })
          }
        })
      }
      let pageTitle = ""
      if (msg.titletext.length === 0) {
        pageTitle = oldTitle
      } else {
        pageTitle = msg.titletext
      }
      let projectURL = ""
      if (msg.urlText.length === 0) {
        projectURL = oldURL
      } else {
        projectURL = msg.urlText
      }
      let bgColor = msg.colorValue
      let frame = figma.createFrame()
      let page = figma.createPage()
      let text = figma.createText()
      let label = figma.createText()
      let url = figma.createText()
   
      page.appendChild(frame)
      frame.appendChild(text)
      frame.appendChild(label)
      frame.appendChild(url)
      frame.resize(620,320)

      page.name = pageTitle
      label.name = "Label"
      frame.name = "Thumb"
      text.name = "Title"
      url.name = "Project URL"

      text.x = 0
      text.y = 20
      text.fontSize = 46
      text.textAlignVertical = "CENTER"
      text.textAutoResize = "NONE"
      text.resize(620,320)
      text.fontName = { family: "Roboto", style: "Bold" }
      text.fills = [{type: 'SOLID', color: {r: 255 / 255, g: 255 / 255, b: 255 / 255}}]

      label.y = 0
      label.x = 0
      label.fontSize = 32
      label.textAlignHorizontal ="LEFT"
      label.textAutoResize = "WIDTH_AND_HEIGHT"
      label.textAlignVertical = "TOP"
      label.fontName = { family: "Roboto", style: "Regular" }
      label.fills = [{type: 'SOLID', color: {r: 255 / 255, g: 255 / 255, b: 255 / 255}}]

      url.y = 187
      url.x = 0
      url.fontSize = 22
      url.textAlignHorizontal ="LEFT"
      url.textAutoResize = "WIDTH_AND_HEIGHT"
      url.textAlignVertical = "TOP"
      url.fontName = { family: "Roboto", style: "Regular" }
      url.fills = [{type: 'SOLID', color: {r: 255 / 255, g: 255 / 255, b: 255 / 255}}]
      url.opacity = 0.5

      async function picker2(hex1,hex2,hex3,newLabel) {
        page.backgrounds = [{type: 'SOLID', color: {r: hex1 / 255, g: hex2 / 255, b: hex3 / 255}}]
        frame.backgrounds = [{type: 'SOLID', visible: false, color: {r: hex1 / 255, g: hex2 / 255, b: hex3 / 255}}]
        text.characters = pageTitle
        label.characters = newLabel
        url.characters = projectURL
      }

      if (bgColor === "1") {
        picker2(0,122,229,"Work in Progress")
      }
  
      if (bgColor === "2") {
        picker2(0,173,159,"Ready to Review")
      }
  
      if (bgColor === "3") {
        picker2(155,0,245,"Live")
      }

      figma.currentPage = page
      figma.viewport.zoom = 1
      figma.root.insertChild(0, page);
      figma.root.children[1].remove()
    }
 
    figma.closePlugin();
  
  }
})
