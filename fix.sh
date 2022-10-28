#!/bin/bash

prettier "**/*" --write --ignore-unknown &&
	eslint --fix --no-error-on-unmatched-pattern --ext .ts &&
	npm run compile
