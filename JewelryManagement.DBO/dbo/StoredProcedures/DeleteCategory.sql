GO

-- =============================================
-- Author:		<Supriya>
-- Create date: <25 jan 2024>
-- Description:	<Deletes category by id>
-- =============================================
CREATE PROCEDURE [dbo].[DeleteCategory]
@Id INT

AS
BEGIN
DELETE FROM Category
WHERE Id = @Id

END
GO


