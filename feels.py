#!/usr/bin/env python

import argparse
import random

DIMENSION = [
    'activated',
    'anger',
    'deactivated',
    'disgust',
    'fear',
    'happy',
    'tender',
    'sad',
    'surprise'
]


def to_absolute(fileName):
    import os.path
    # where is this module?
    thisDir = os.path.dirname(__file__)
    return os.path.join(thisDir, fileName)

#------------------------------------------------------------------------------
# word methods
#------------------------------------------------------------------------------

def buildByDimension(fileName):
    from collections import defaultdict
    from csv import DictReader

    result = defaultdict(list)
    with open(to_absolute(fileName), 'r') as f:
        reader = DictReader(f, dialect='excel-tab')
        for row in reader:
            for d in DIMENSION:
                if row[d]:
                    result[d].append(row['feel'])

    return result


def pick(opts, byDimension):
    dimension = opts.dimension if opts.dimension else random.choice(DIMENSION)
    return random.choice(byDimension[dimension])

#------------------------------------------------------------------------------
# Main
#------------------------------------------------------------------------------

def buildArgParser():
    p = argparse.ArgumentParser(description='randomly choose emotion words')
    p.add_argument('-d', '--dimension', choices=sorted(DIMENSION),
                   help='pick from only one dimension')
    p.add_argument('-n', '--count', type=int, default='1',
                   help='number of words to choose')
    return p

def main():
    parser = buildArgParser()
    options = parser.parse_args()

    byDimension = buildByDimension( 'feels.txt' )
    for i in range(0, options.count):
        print(pick(options, byDimension))


if __name__ == '__main__':
    main()
