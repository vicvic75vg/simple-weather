#!/bin/bash
lsof -i :5000 | grep LISTEN | awk '{print $2}' | xargs kill
lsof -i :3000 | grep LISTEN | awk '{print $2}' | xargs kill