GO

-- =============================================
-- Author:		<Supriya>
-- Create date: <25 jan 2024>
-- Description:	<returns category by id>
-- =============================================
CREATE PROCEDURE [dbo].[GetCategoryById]
	@Id INT 
	AS
BEGIN
	SELECT * FROM Category where Id = @Id

END
GO


