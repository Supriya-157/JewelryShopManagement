-- =============================================
-- Author:		<Nitesh>
-- Create date: <10 Feb 2024>
-- Description:	<Inserts Product>
-- =============================================
CREATE PROCEDURE [dbo].[InsertProduct]
		@Name nvarchar(250) ,
		@Description nvarchar(250),
		@Price Decimal(19,4),
		@ScratchRate Decimal(19,4),
		@ItemCode int,
		@IsActive bit,
		@CategoryId int,
		@Metal nchar,
		@Weight Decimal(19,4)


	AS
BEGIN
	DECLARE @Mycounter INT = 0 

	Select @Mycounter = COUNT(*) from Product
	Where LOWER(Name)  = Lower(@Name)
	       

   if (@Mycounter = 0)
		BEGIN
			Insert into Product (Name,Description,Price,ScratchRate,ItemCode,IsActive,CategoryId,Metal,Weight) 
			values (@Name,@Description,@Price,@ScratchRate,@ItemCode,@IsActive,@CategoryId,@Metal,@Weight)
			 
			  
			SELECT 'SUCCESS';
		END
	else
		BEGIN
		SELECT 'ERROR'
		END

END
GO