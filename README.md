# rs-cli (task for RSSchool)

- ### -a, --action <action> - encode or decode file or your string
- ### -s, --shift <shift> - offset
- ### -i, --input <input> input file
- ### -o, --output <output> output file

#### Lets start!
Install all packages before starting (npm i).
Then put the text you want to encode / decode into input.txt or any other file with your name.
Open terminal in root and start work.

#### example:
- node index.js -a decode -s 64 -i 'input.txt' -o 'output.txt'

If you want to encode or decode text without using files, then:
- node index.js -a encode -s -20 -st 'Hello world!'

(project files in 'work' branch)



