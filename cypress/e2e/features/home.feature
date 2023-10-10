@PERSE-632 @TestExecution
@PERSE-12
Feature: 03 Search usage: PLP results (Angular/Hybris)

	Scenario Outline: PERSE-12: Validate Search Results by Hitting Enter Button
		Given I launch webshop ATAO page on '<device>' with '<tenant>' on '<environment>' with '<usertype>'
		And I can see the rexel logo
		When I click on '<btn>' button
		Then I am able to enter '<numAcc>' and '<numPostCode>' values
		And I click on '<btnBack>' button for nevigate to next page or back page
		# And I fill '<input>' to the mandatory field
		Examples:
			| environment | tenant | btn                      | usertype     | device  | numAcc | numPostCode | btnBack  | input                                                         |
			| QA          | swe    | Registrera användarkonto | WebshopAdmin | desktop | 200408 | 41468       | Fortsätt | TestN,TestL,testNL@gmail.com,726412709,userTest1,Test@123,Test@123 |


	# Scenario Outline: PERSE-12: Validate Search Results by Hitting Enter Button
	# 	Given I launch webshop ATAO page on '<device>' with '<tenant>' on '<environment>' with '<usertype>'
	# 	And I can see the rexel logo
	# 	When I click on '<btn>' button
	# 	Then I am able to enter '<numAcc>' and '<numPostCode>' values
	# 	And I click on '<btnBack>' button for nevigate to next page or back page
	# 	 And I fill '<input>' to the mandatory field
	# 	Examples:
	# 		| environment | tenant | btn                      | usertype     | device  | numAcc | numPostCode | btnBack  | input                                                         |
	# 		| QA          | swe    | Registrera användarkonto | WebshopAdmin | desktop | 20040 | 41468       | Fortsät | TestN,TestL,testNL@gmail.com,726412709,userTest1,Test@123,Test@123 |
