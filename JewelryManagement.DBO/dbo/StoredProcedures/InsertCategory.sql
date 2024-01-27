GO

-- =============================================
-- Author:		<Supriya>
-- Create date: <25 Jan 2024>
-- Description:	<Inserts category>
-- =============================================
CREATE PROCEDURE [dbo].[InsertCategory]
	@Name nvarchar(200) 
	AS
BEGIN
	DECLARE @Mycounter INT = 0 

	Select @Mycounter = COUNT(*) from Category
	Where LOWER(Name)  = Lower(@Name)

	if (@Mycounter = 0)
		BEGIN
			Insert into Category (Name) values (@Name)
			SELECT 'SUCCESS';
		END
	else
		BEGIN
		SELECT 'ERROR'
		END

END
GO


