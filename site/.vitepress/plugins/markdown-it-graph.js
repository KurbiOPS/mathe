export default function markdownItGraph(md) {
    md.block.ruler.before("paragraph", "graph_block", (state, startLine, endLine, silent) => {
      const startToken = state.getLines(startLine, startLine + 1, 0, false).trim();
  
      if (!startToken.startsWith(":::graph")) return false;
  
      let nextLine = startLine + 1;
      let args = { funktion: [] }; // Array für mehrere Funktionen
  
      while (nextLine < endLine) {
        const lineText = state.getLines(nextLine, nextLine + 1, 0, false).trim();
  
        if (lineText.startsWith(":::")) break;
  
        const match = lineText.match(/^([^=]+)=(.+)$/);
        if (match) {
          const key = match[1].trim().toLowerCase();
          const value = match[2].trim();
  
          if (key === "funktion") {
            args.funktion.push(value); // Mehrere Funktionen speichern
          } else {
            args[key] = value;
          }
        }
  
        nextLine++;
      }
  
      if (!args.funktion.length || !args.xmin || !args.xmax || !args.ymin || !args.ymax) {
        return false;
      }
  
      const uniqueId = `graph-${Math.random().toString(36).substr(2, 9)}`;
  
      const token = state.push("html_block", "", 0);
      token.content = `<PlotlyGraph :funktion='${JSON.stringify(args.funktion)}' :xmin="${args.xmin}" :xmax="${args.xmax}" :ymin="${args.ymin}" :ymax="${args.ymax}" id="${uniqueId}" />`;
  
      state.line = nextLine + 1;
      return true;
    });
  }