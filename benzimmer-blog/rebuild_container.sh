#!/bin/bash
sudo docker stop webapp

sudo docker build -t benzimmer-us:latest .

bash run_container.sh