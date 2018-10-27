#
# Author: David Bonilla Castillo (dmgf2008@hotmail.com)
#
# Made in MIPS, tested in QtSpim
#
		.data
Fizz:	.asciiz "Fizz"
Buzz:	.asciiz "Buzz"
nline:	.asciiz "\n"

		.text
		.globl main
main:
		li $t0, 1			# from 1
		li $t1, 101			# to 100
		li $t2, 3			# compare to 3
		li $t3, 5			# compare to 5
loop:
		beq $t0, $t1 end	# if i == 101 end
		div $t0, $t2		# Divide by 3
		mfhi $t4			# Get Modulo
		blez $t4 three		# if i%3 == true
cont1:	div $t0, $t3		# Divide by 5
		mfhi $t5			# Get Modulo
		blez $t5 five		# if i%5 == true
		blez $t4 cont2		# If mod3 == true, skip number
		li $v0, 1			# Prepare to print number
		move $a0, $t0		# Get number to print
		syscall				# Print
cont2:	li $v0, 4			# Prepare to print string
		la $a0, nline		# Get new line
		syscall				# Print
		addi $t0, $t0, 1	# i++
		j loop				# Loop
end:
		li $v0, 10			# End Program
		syscall				# Gracefully

three:	li $v0, 4			# Prepare to print string
		la $a0, Fizz		# Get Fizz
		syscall				# Print
		j cont1				# Go back
		
five:	li $v0, 4			# Prepare to print string
		la $a0, Buzz		# Get Buzz
		syscall				# Print
		j cont2				# Go back