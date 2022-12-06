const detectStartOfPacket = (buffer: string, lengthOfPacket: number): number | null => {
    const bufferDetector = [];
    for(let i = 0; i < buffer.length; i++) {
        const currentLetter = buffer[i];
        if(bufferDetector.includes((currentLetter))) {
            bufferDetector.splice(0, bufferDetector.indexOf(currentLetter) + 1);
            bufferDetector.push(currentLetter);
        } else {
            bufferDetector.push(currentLetter);
            if(bufferDetector.length == lengthOfPacket) {
                return i + 1;
            }
        }
    }
    return 0;
};

export { detectStartOfPacket };
