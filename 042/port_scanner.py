#!/usr/bin/env python3
"""
@author: David Bonilla Castillo (dmgf2008@hotmail.com)
@version: 1
"""
import socket
import sys
import logging

class PortScanner():
    """Simple PortScanner

    Scans a single port or a range, returns dictionary with True/False

    """
    verbose = False
    def __init__(self):
        return

    @staticmethod
    def scan(targetIp, port):
        """Single Port Scan"""
        sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        result = sock.connect_ex((targetIp, port)) == 0
        if PortScanner.verbose:
            logging.info("port: " + str(port) + " - " + ("Open" if result else "Closed"))
        return result

    @staticmethod
    def scanRange(targetIp, range):
        """Port Range Scan"""
        ports = {}
        for port in range:
            ports[port] = PortScanner.scan(targetIp, port)
        return ports

if "-v" in sys.argv:
    PortScanner.verbose = True
    sys.argv.remove("-v")
    logging.basicConfig(format="%(message)s", level=logging.DEBUG)
else:
    logging.basicConfig(format="%(message)s")

if len(sys.argv) < 3:
    raise Exception("Not enough arguments")
elif len(sys.argv) == 3:
    result = PortScanner.scan(sys.argv[1], int(sys.argv[2]))
    if PortScanner.verbose:
        logging.info("Scanning " + sys.argv[1])
elif len(sys.argv) == 4:
    if PortScanner.verbose:
        logging.info("Scanning " + sys.argv[1])
    result = PortScanner.scanRange(sys.argv[1], range(int(sys.argv[2]), int(sys.argv[3]) + 1))

print(result)
