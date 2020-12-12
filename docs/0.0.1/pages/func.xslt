<?xml version="1.0" encoding="UTF-8" ?>
<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/func">
        <html>
            <body>
                <h2>
                    <xsl:value-of select="name" />
                    :
                    <xsl:value-of select="returns" />
                </h2>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Optional</th>
                        <th>Description</th>
                    </tr>
                    <xsl:for-each select="params">
                        <xsl:for-each select="param">
                            <tr>
                                <td>
                                    <xsl:value-of select="name" />
                                </td>

                                <td>
                                    <xsl:value-of select="type" />
                                </td>

                                <td>
                                    <xsl:value-of select="optional" />
                                </td>

                                <td>
                                    <xsl:value-of select="description" />
                                </td>
                            </tr>
                        </xsl:for-each>
                    </xsl:for-each>
                </table>
                <div>
                    Shorthand:
                    <code>
                        <xsl:value-of select="shorthand" />
                    </code>
                </div>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
