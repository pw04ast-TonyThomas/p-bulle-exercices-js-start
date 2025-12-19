// ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */
export class Size {
    constructor(width = 80, height = 60) {
        this.width = width;
        this.height = height;
    }

    resize(newWidth, newHeight) {
        this.width = newWidth;
        this.height = newHeight;
    }
}

export class Position {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    move(newX, newY) {
        this.x = newX
        this.y = newY
    }
}

export class ProgramWindow { // === Cet exercice est vraiment mal fait ===
    constructor() {    
        this.screenSize = new Size(800, 600)
        this.size = new Size()
        this.position = new Position()
    }

    move(newPos) {
        const x = Math.max(0, Math.min(newPos.x, this.screenSize.width - this.size.width))
        const y = Math.max(0, Math.min(newPos.y, this.screenSize.height - this.size.height))

        this.position.move(x, y)
    }

    resize(newSize) {
        const width = Math.max(1, Math.min(newSize.width, this.screenSize.width - this.position.x))
        const height = Math.max(1, Math.min(newSize.height, this.screenSize.height - this.position.y))

        this.size.resize(width, height)
    }
}


export function changeWindow(programWindow) {
    programWindow.move(new Position(100,150));
    programWindow.resize(new Size(400, 300));
    return programWindow;
}